const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class myPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
      }
    }

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then (onFulFilled, onRejected) {
    if (onFulFilled && this.state === FULFILLED) {
      onFulFilled(this.result)
    }

    if(onRejected && this.state === REJECTED) {
      onRejected(this.result)
    }
  }
}