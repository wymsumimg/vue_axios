let domainsFuc = (env) => {
    let domain, uri = location.href;
    if (uri.indexOf('zhdtnet') > -1) {
      domain = 'https://manage.i31.com/elevator/maintain';
    } else {
      domain = 'https://test.i31.com/elevator/maintain';
    }
    // domain = 'http://192.168.1.237:8081/elevator/maintain';
    // domain = 'https://manage.i31.com/elevator/maintain';
    domain = 'http://192.168.21.222:8017/APi/'
    return {
      domain: domain,
    }
  
  
  };
  export default domainsFuc