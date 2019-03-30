export const demoEdit = {
  wrapper: {
    width: '50%',
    overflow: 'scroll',
    height: 'calc(100vh - 40px)',
    padding: '32px 16px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  } as React.CSSProperties,
  buttons: {
    display: 'flex',
    alignItems: 'center',
    width: '320px',
  } as React.CSSProperties,
};

export const demoEditRoute = {
  label: {
    color: '#fff',
    padding: '4px',
    boxSizing: 'border-box',
    textAlign: 'center',
    display: 'block',
    width: '320px',
  } as React.CSSProperties,
  ul: {
    listStyleType: 'none',
    margin: '0 0 16px 0',
    padding: 0,
  } as React.CSSProperties,
  input: {
    width: '320px',
    boxSizing: 'border-box',
    padding: '6px 4px',
    fontSize: '16px',
    imeMode: 'active',
  } as React.CSSProperties,
};
