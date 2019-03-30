import puppeteer from 'puppeteer';

(async () => {
  /** 自動操作したいページのURL */
  const TARGET_URL = 'http://localhost:3000';

  /** puppeteerを起動 */
  const browser = await puppeteer.launch({
    headless: false, // Headlessモードで起動するかどうか
    slowMo: 50, // 50ミリ秒スローモーションで実行する
  });

  /** 新しい空のページを開く */
  const page = await browser.newPage();

  /** view portの設定 */
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  /** Webページにアクセスする */
  await page.goto(TARGET_URL);

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/1_initial.png' });

  /** Aをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(3) > img',
  );

  /** Gをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(9) > img',
  );

  /** Dをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(6) > img',
  );

  /** Hをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(10) > img',
  );

  /** Fをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(8) > img',
  );

  /** Cをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(5) > img',
  );

  /** Eをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(7) > img',
  );

  /** Bをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(4) > img',
  );

  /** Cをクリック */
  await page.click(
    '.DemoQuestionMap > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(5) > img',
  );

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/2_over.png' });

  /** 「正解を見る」ボタンをクリック */
  await page.click('.DemoDescription > button.DemoDescriptionButton');

  /** 1秒待つ */
  await page.waitFor(1000);

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/3_answer.png' });

  /** 「やり直す」ボタンをクリック */
  await page.click('.DemoAnswer > div > div.DemoAnswerNavArea > button');

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/4_initial.png' });

  /** 「ルートを編集」ボタンをクリック */
  await page.click('.DemoDescription > button.DemoQuestionButton');

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/5_edit.png' });

  /** 出発地を「虎ノ門」と入力 */
  const departure = await page.$('main > div:nth-child(2) > ul:nth-child(3) > li > input');
  if (departure) {
    await departure.click({ clickCount: 3 });
    await departure.type('虎ノ門');
  }

  /** ルート7を「品川駅」と入力 */
  const route7 = await page.$(
    'main > div:nth-child(2) > ul:nth-child(4) > li:nth-child(8) > input',
  );
  if (route7) {
    await route7.click({ clickCount: 3 });
    await route7.type('品川駅');
  }

  /** ルート8を空にする */
  const route8 = await page.$(
    'main > div:nth-child(2) > ul:nth-child(4) > li:nth-child(9) > input',
  );
  if (route8) {
    await route8.click({ clickCount: 3 });
    await route8.type('渋谷ヒカリエ');
  }

  /** 到着地を「東京スカイツリー」と入力 */
  const arrival = await page.$('main > div:nth-child(2) > ul:nth-child(6) > li > input');
  if (arrival) {
    await arrival.click({ clickCount: 3 });
    await arrival.type('東京スカイツリー');
  }

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/6_edit.png' });

  /** 「ルートを編集」ボタンをクリック */
  await page.click('main > div:nth-child(2) > div:nth-child(7) > button:nth-child(2)');

  /** 1秒待つ */
  await page.waitFor(3000);

  /** スクリーンショットを撮る */
  await page.screenshot({ path: './e2e/screenshots/7_initial.png' });

  /** 手動でブラウザを終了する */
  await browser.close();
})();
