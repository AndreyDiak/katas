class Queue {
  #storage = {}
  #last = 0
  #first = 0

  enqueue(item) {
    // todo: добавить элемент в конец очереди
    this.#storage[this.#last] = item
    this.#last++
  }

  dequeue() {
    // todo: удалить первый элемент из очереди
    if (this.size === 0) return

    const value = this.#storage[this.#first]
    delete this.#storage[this.#first]
    this.#first++
    return value
  }

  get size() {
    // todo: возвращает размер списка
    return this.#last - this.#first
  }
}

const User = new Queue()
User.enqueue(10)
User.enqueue(20)

console.log(User.show())
User.size
