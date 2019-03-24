import { Gross, Position, Route, Traffic, Transport, Expressway, Step } from '../state.model';
import { Action } from '../demo/demoAction.model';

type MarkerProps = {
  departure: Position;
  arrival: Position;
  routes: Route[];
  questionStep: Step;
  currentSortId: number;
  dispatchMarkerClickActions: (
    routeid: number,
    questionStep: Step,
    currentSortId: number,
  ) => Action[];
};

type PolilineProps = {
  routes: Route[];
  traffic: Traffic;
  transport: Transport;
  departure: Position;
  arrival: Position;
  expressway: Expressway;
  departureTime: Date;
  dispatchUpdateGross: (gross: Gross) => Action;
};

type AnswerPolilineProps = {
  routes: Route[];
  traffic: Traffic;
  transport: Transport;
  departure: Position;
  arrival: Position;
  expressway: Expressway;
  departureTime: Date;
  dispatchUpdateAnswerData: (gross: Gross, waypointOrder: number[]) => Action;
};

class Maps {
  map!: google.maps.Map;

  /** ポリライン */
  line: google.maps.Polyline | null = null;

  /**
   * Mapを任意の要素に表示する
   * @param mapDiv Mapを表示する要素
   */
  public initMap(mapDiv: HTMLDivElement | null, departure: Position): void {
    /**
     * 地図を表示する際のオプション（初期表示）
     * Mapsのオプション一覧
     * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
     */
    const mapOptions: google.maps.MapOptions = {
      center: new google.maps.LatLng(departure.lat, departure.lng),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    /** Mapオブジェクトに地図表示要素情報とオプション情報を渡し、インスタンス生成 */
    this.map = new google.maps.Map(mapDiv, mapOptions); // <= refで取得した要素
  }

  /**
   * Map上にマーカーを表示する
   */
  public initMarker(props: MarkerProps): void {
    const {
      departure,
      arrival,
      routes,
      questionStep,
      currentSortId,
      dispatchMarkerClickActions,
    } = props;
    let marker;
    /** 範囲（境界）のインスタンスを作成するクラス */
    const bounds = new google.maps.LatLngBounds();

    /** 出発地のマーカーを地図に表示 */
    marker = new google.maps.Marker({
      position: { lat: departure.lat, lng: departure.lng },
      map: this.map,
      title: departure.title,
      label: departure.label,
    });

    /** 位置情報を範囲に追加 */
    bounds.extend(marker.getPosition());

    /** 到着地のマーカーを地図に表示 */
    marker = new google.maps.Marker({
      position: { lat: arrival.lat, lng: arrival.lng },
      map: this.map,
      title: arrival.title,
      label: arrival.label,
    });

    /** 位置情報を範囲に追加 */
    bounds.extend(marker.getPosition());

    /** Markerを表示 */
    routes.forEach((route: Route) => {
      /**
       * Markerを設定
       * Markerオプション
       * https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
       */
      const icon =
        route.sortId !== 0
          ? 'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png'
          : 'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-a.png';

      marker = new google.maps.Marker({
        map: this.map,
        draggable: false, // ドラッグできるか
        opacity: 1.0, // 透明度
        position: { lat: route.lat, lng: route.lng },
        title: route.title,
        label: route.label,
        icon,
      });

      /** 位置情報を範囲に追加 */
      bounds.extend(marker.getPosition());

      /** クリック時の処理（吹き出し表示） */
      marker.addListener('click', () => {
        if (route.sortId === 0) {
          dispatchMarkerClickActions(route.id, questionStep, currentSortId);
        }
      });
      return marker;
    });

    /** すべてのMarkerを地図に収める */
    if (currentSortId === 0 || currentSortId === routes.length) {
      this.map.fitBounds(bounds);
    }
  }

  /**
   * Map上にポリラインを表示する
   */
  public initPolyLine(props: PolilineProps): void {
    const {
      routes,
      traffic,
      transport,
      departure,
      arrival,
      expressway,
      departureTime,
      dispatchUpdateGross,
    } = props;

    /**
     * 既存のポリラインを削除
     * https://developers.google.com/maps/documentation/javascript/examples/polyline-remove
     * */
    if (this.line != null) {
      this.line.setMap(null);
    }

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const filteredRoutes = routes.filter(route => route.sortId !== 0);

    /** 経路 */
    const wayPoints = filteredRoutes.map(route => ({
      location: route.title,
      stopover: traffic === Traffic.Standard,
    }));

    /** 到着地 */
    const destination =
      filteredRoutes.length === routes.length
        ? arrival.title
        : filteredRoutes[filteredRoutes.length - 1].title;

    /** polylineをレンダリングする際のオプション */
    directionsRenderer.setOptions({
      suppressMarkers: true, // マーカーを非表示にする場合はtrue
      preserveViewport: true, // zoomさせないようにする場合はtrue
      polylineOptions: {
        strokeOpacity: 1.0, // polylineの透明度0.0~1.0
        strokeWeight: 6, // polylineの幅（ピクセル）
        strokeColor: '#6991fd', // polylineの色
      },
    });

    /** directions apiへのリクエスト */
    directionsService.route(
      {
        origin: departure.title, // 出発地
        waypoints: wayPoints, // 経路（配列）
        destination, // 到着地
        travelMode:
          transport === Transport.Car
            ? google.maps.TravelMode.DRIVING
            : google.maps.TravelMode.WALKING, // 車(DRIVING) or 徒歩(WALKING)
        provideRouteAlternatives: false, // 複数の代替ルートをレスポンスに返す場合はtrue
        avoidHighways: expressway === Expressway.No, // 高速道路を利用しない場合はtrue
        avoidTolls: expressway === Expressway.No, // 有料道路を利用しない場合はtrue
        optimizeWaypoints: false, // 最適化を有効にする場合はtrue
        drivingOptions: {
          departureTime: departureTime,
          trafficModel:
            traffic === Traffic.Bestguess
              ? google.maps.TrafficModel.BEST_GUESS
              : traffic === Traffic.Optimistic
              ? google.maps.TrafficModel.OPTIMISTIC
              : google.maps.TrafficModel.PESSIMISTIC,
        }, // 交通量を見積もる場合のオプション
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          // directions apiのレスポンスをセット
          directionsRenderer.setDirections(response);

          // 総距離、総時間を表示
          let distance = 0;
          let duration = 0;
          response.routes[0].legs.forEach(item => {
            distance += item.distance.value;
            duration +=
              transport === Transport.Car && traffic !== Traffic.Standard
                ? item.duration_in_traffic.value
                : item.duration.value;
          });
          const gross = {
            distance: Math.floor((distance / 1000) * 10 ** 1) / 10 ** 1, // 小数点第1位以下を切り捨て
            duration: Math.floor((duration / 60) * 10 ** 1) / 10 ** 1, // // 小数点第1位以下を切り捨て
          };
          return [
            directionsRenderer.setMap(this.map), // polylineを地図に表示
            dispatchUpdateGross(gross),
          ];
        }
        return `error: ${status}`;
      },
    );
  }

  /**
   * propsから出発地、到着地、経路、オプションを取得して、マーカーを結ぶ線（polyline）を地図に表示する
   */
  public initAnswerPolyLine(props: AnswerPolilineProps): void {
    const {
      routes,
      traffic,
      transport,
      departure,
      arrival,
      expressway,
      departureTime,
      dispatchUpdateAnswerData,
    } = props;
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    // 経路
    const wayPoints = routes.map(route => ({ location: route.title, stopover: true }));

    // polylineをレンダリングする際のオプション
    directionsRenderer.setOptions({
      suppressMarkers: true, // マーカーを非表示にする場合はtrue
      preserveViewport: true, // zoomさせないようにする場合はtrue
      polylineOptions: {
        strokeOpacity: 1.0, // polylineの透明度0.0~1.0
        strokeWeight: 6, // polylineの幅（ピクセル）
        strokeColor: '#6991fd', // polylineの色
      },
    });
    // directions apiへのリクエスト
    directionsService.route(
      {
        origin: departure.title, // 出発地
        destination: arrival.title, // 到着地
        drivingOptions: {
          departureTime: departureTime,
          trafficModel:
            traffic === Traffic.Bestguess
              ? google.maps.TrafficModel.BEST_GUESS
              : traffic === Traffic.Optimistic
              ? google.maps.TrafficModel.OPTIMISTIC
              : google.maps.TrafficModel.PESSIMISTIC,
        }, // 交通量を見積もる場合のオプション
        optimizeWaypoints: true, // 最適化を有効にする場合はtrue
        waypoints: wayPoints, // 経路（配列）
        travelMode:
          transport === Transport.Car
            ? google.maps.TravelMode.DRIVING
            : google.maps.TravelMode.WALKING, // 車(DRIVING) or 徒歩(WALKING)
        provideRouteAlternatives: false, // 複数の代替ルートをレスポンスに返す場合はtrue
        avoidHighways: expressway === Expressway.No, // 高速道路を利用しない場合はtrue
        avoidTolls: expressway === Expressway.No, // 有料道路を利用しない場合はtrue
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          // directions apiのレスポンスをセット
          directionsRenderer.setDirections(response);

          // 総距離、総時間を表示
          let distance = 0;
          let duration = 0;
          response.routes[0].legs.forEach(item => {
            distance += item.distance.value;
            duration += item.duration.value;
          });
          const gross = {
            distance: Math.floor((distance / 1000) * 10 ** 1) / 10 ** 1, // 小数点第1位以下を切り捨て
            duration: Math.floor((duration / 60) * 10 ** 1) / 10 ** 1, // // 小数点第1位以下を切り捨て
          };
          return [
            directionsRenderer.setMap(this.map), // polylineを地図に表示
            dispatchUpdateAnswerData(gross, response.routes[0].waypoint_order),
          ];
        }
        return `error: ${status}`;
      },
    );
  }
}

export default Maps;
