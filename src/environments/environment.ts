// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_global:"",
  port_clientes:    'http://localhost:7100', //'https://7wm9bk5qsj.execute-api.us-east-1.amazonaws.com/dev',
  port_clientes_onpremise:    'http://localhost:7099',
  port_sunat:       'https://7wm9bk5qsj.execute-api.us-east-1.amazonaws.com/dev/v1/sunat/ruc',
  //port_capacidades: 'http://localhost:7100',
  //port_citas:       'http://localhost:7099',
  //port_utilidades:  'https://7wm9bk5qsj.execute-api.us-east-1.amazonaws.com/dev',
  //port_credenciales:'https://7wm9bk5qsj.execute-api.us-east-1.amazonaws.com/dev',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
