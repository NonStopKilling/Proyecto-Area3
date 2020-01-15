// const app = new Vue({
//     el: '#app',
//     data: {
//         titulo: 'Hola mundo con Vue',
//         frutas: ['Manzana','Pera','Platano'],
//         map: ['Mapeo 1','Mapeo 2','Mapeo 3'],
//         tabs: [
//             {nombre:'Proyecto 1', descripcion:'hola'},
//             {nombre:'Proyecto 2', descripcion:'hola'},
//             {nombre:'Proyecto 3', descripcion:'hola'},
//             {nombre:'Proyecto 4', descripcion:'hola'}
//         ]

//     }
// })



Vue.component('todo-item', {
    template: '<span>{{subtodo.text}}</span>',
    props: ['subtodo']
  })
  
  var app = new Vue({
    el: '#app',
    data: function () {
        return {
            menus: ['Menu 1','Menu 2','Menu 3','Menu 4','Menu 5','Menu 6'],
            map: ['Mapeo 1','Mapeo 2','Mapeo 3','Mapeo 4','Mapeo 5','Mapeo 6'],
            frutas: ['Manzana','Pera','Platano'],
            todos: [
                { text : 'Proyecto A', 
                    subTodos : [{ text : 'Sub Proyecto a1'}]
                },
                { text : 'Proyecto B', 
                    subTodos : [{ text : 'Sub Proyecto b1'}]          
                },
                { text : 'Proyecto Uno', 
                    subTodos : [{ text : 'Sub Proyecto 11'}]
                }
              ]
        }
    }
  })