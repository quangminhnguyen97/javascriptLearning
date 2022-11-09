// Setup common methods for linked list 
// - insertHead()
// - getHead()
// - getTail()
// - getSize()
// - findIndexByData()
// - findWithCallback()


function createLinkedList () {
  let head = null;

  const insertHead = (newValue) => {
    let newNode = {
      data: newValue,
      next: null,
    }
    if ( head == null ) {
      head = newNode;
      return
    }
    newNode.next = head
    head = newNode
  }

  const getHead = () => {
    console.log(head);
    return head
  }

  const getSize = () => {
    if (head == null) return 0;
    let current = head;
    let count = 0
    while (current != null) {
      count++
      current = current.next
    }
    console.log(count)
    return count
  }

  const getTail = () => {
    if (head == null) return undefined;
    let current = head;

    while (current.next != null) {
      current = current.next
    }

    console.log(current)
    return current
  }



  const findIndexByData = (data) => {
    if (head == null) return undefined;
    let current = head;
    let count = 0

    while (current) {
      if (current.data === data) return count;
      current = current.next
      count++;
    }

    console.log(count)

    return count

  }

  const findWithCallback = (callback) => {
    if (head == null) return undefined;
    let current = head;

    while (current) {
      if (callback(current.data)) return current.data;
      current = current.next
    }

    return undefined
  }

  const printList = () => {
    if (head == null) return;
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next
    }
  }

  return {
    insertHead,
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallback,
    printList
  }

}

 const numberLinkedList = createLinkedList()
 numberLinkedList.insertHead(5)
 numberLinkedList.insertHead(4)
 numberLinkedList.insertHead(3)
 numberLinkedList.insertHead(2)
 numberLinkedList.insertHead(1)

 numberLinkedList.getHead()
 numberLinkedList.getSize()
 numberLinkedList.getTail()
 numberLinkedList.findIndexByData(1)
 numberLinkedList.printList()

 numberLinkedList.findWithCallback((x) => x % 2 === 0)
