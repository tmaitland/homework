///Variable Names

////Create Functions///

////Linked list Class - Player Names ////
class Node {
    constructor(id, value){
        this.id = id;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.nextid = 0; 
        this.length = 0;
    }

    insert(value){
        const node = new Node(this.nextid++, value)

        if(!this.head && !this.tail){
            this.head = node;
            this.tail = node; 
        }
        else {
            // first add at the tail.next
            this.tail.next = node; 
            // make the tail a reference to the node
            this.tail = node;
        }

        this.length++;
    }

    remove(id){
        let temp;
        if(!this.head && !this.tail){ // if(!(this.head || this.tail))
            console.log('The list is empty');
            return;
        }
        if(this.head.id === this.tail.id){
            temp = this.head;
            this.head = null; 
            this.tail = null; 
            this.length = 0;
            this.nextid = 0;
            return temp;
        }

        if (this.head.id === id){
            temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp;
        }

        let node = this.head;

        while(node.next){ 
            if (node.next.id == id){
                 temp = node.next;
                node.next = node.next.next;

                if(temp.id === this.tail.id){
                    this.tail = node; 
                }
                this.length--;
                return temp;
            }
            
            node = node.next; 
        }
        console.log("Could not find id " + id );
    }

    forEach(callback){
       let node = this.head;
      if(node){
          callback(node);
        while(node.next){
          node = node.next;
          callback(node);
        }
      }
    }

    

}

const linkedList = new LinkedList();

linkedList.insert({
    name: "Fela",
    skill: 902,
    phone: 9548529635,
})
linkedList.insert({
    name: "Joshua",
    skill: 815,
    phone: 9548529635,
})
linkedList.insert({
    name: "Miranda",
    skill: 789,
    phone: 9548529635,
})
linkedList.insert({
    name: "Aminah",
    skill: 899,
    phone: 9548529635,
})



const addPlayer = document.getElementById('addPlayer');

addPlayer.addEventListener('click', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var skill = document.getElementById('skill').value;
    var phone = document.getElementById('phone').value
    linkedList.insert({
        name: name,
        skill: skill,
        phone: phone
    })
    showPlayers.innerHTML += `
        <p class="showEm">${name}| ${skill} | ${phone}</p>
    `
});

const displayThem = document.getElementById('displayThem')
const showPlayers = document.getElementById('showPlayers')

displayThem.addEventListener('click', function(e){
    e.preventDefault();
    console.log('it works')
    linkedList.forEach(node => {
        showPlayers.innerHTML += `
        <p class="showEm">${node.value.name}| ${node.value.skill} | ${node.value.phone}</p> 
        `
    });
})







// function dislayPlayer(linkedList){
//     const sorted = [];
//     linkedList.forEach(function(node){
//         if(sorted.length === 0){
//             sorted.push(node)
//         }
//         for(let i=0; i<sorted.length; i++){
//             if(sorted[i].value.name <= node.value.name){
//                 sorted.splice(i,0,node)
//             }
//             break;
//         }
//     })

//     return sorted;
// }






