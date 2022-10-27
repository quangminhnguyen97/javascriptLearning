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
    printList
  }
}

 const numberLinkedList = createLinkedList()
 numberLinkedList.insertHead(5)
 numberLinkedList.insertHead(4)
 numberLinkedList.insertHead(3)
 numberLinkedList.insertHead(2)

 numberLinkedList.printList()