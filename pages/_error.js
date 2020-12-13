import Error from "next/error";
import Router from "next/router";

export default Error;

Error.getInitialProps = ({ res, err, asPath }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode && statusCode === 404) {
    if (asPath.match(/\/$/)) {
      const withoutTrailingSlash = asPath.substr(0, asPath.length - 1);
      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash
        });
        res.end();
      } else {
        Router.push(withoutTrailingSlash);
      }
    }
  }

  return { statusCode };
};


// add this to nginx
// rewrite ^(.+)/+$ $1 permanent;

// MyError.getInitialProps = async ({ res, err, asPath }) => {
//     // Capture 404 of pages with traling slash and redirect them
//     const statusCode = res 
//       ? res.statusCode
//       : (err ? err.statusCode : 404);
  
//     if (statusCode && statusCode === 404) {
//       const [path, query = ''] = asPath.split('?');                                                                                                                                                                                             
//       if (path.match(/\/$/)) {
//         const withoutTrailingSlash = path.substr(0, path.length - 1); 
//         if (res) {
//           res.writeHead(302, {
//             Location: `${withoutTrailingSlash}${query ? `?${query}` : ''}`,
//           }); 
//           res.end();
//         } else {
//           Router.push(`${withoutTrailingSlash}${query ? `?${query}` : ''}`);
//         }   
//       }   
//     }