
export default {
  entry: './dist/mylib/@nglib/mylib.es5.js',
  dest: './dist/mylib/bundles/mylib.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'nglib.mylib',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Subscriber': 'Rx',
    'rxjs/scheduler/queue': 'Rx.Scheduler',
    'rxjs/operator/map': 'Rx.Observable.prototype',
    'rxjs/operator/pluck': 'Rx.Observable.prototype',
    'rxjs/operator/distinctUntilChanged': 'Rx.Observable.prototype',
    'rxjs/operator/observeOn': 'Rx.Observable.prototype',
    'rxjs/operator/scan': 'Rx.Observable.prototype',
    'rxjs/operator/withLatestFrom': 'Rx.Observable'
  }
}
