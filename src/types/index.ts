type logFun = (url: string, message: string) => void

type logEmitter = {
  log: logFun
}

export { logFun, logEmitter }
