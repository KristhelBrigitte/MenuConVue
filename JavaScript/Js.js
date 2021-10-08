

let app= Vue.createApp({
    data:  function(){
        return{
            title:'Sabour Gourmet',
            category1:'Fast food',
            category2:'Drinks',
            category3:'Deserts',
            show:false,
            count:0,
            activePicFast:"/images/FastFood/Burritos-mexicanos-con-carne-picada-y-frijoles.jpg",
            picturesFast:[
                "/images/FastFood/Burritos-mexicanos-con-carne-picada-y-frijoles.jpg",
                "/images/FastFood/f10d69e7fede5cd6200a8ddd41b3cb68_hamburguesa-parrillera.jpg",
                "/images/FastFood/Los-mejores-pescados-para-asar-a-la-parrilla-1200x720.jpg",
                "/images/FastFood/Nachos.jpg",
                "/images/FastFood/nuggets.jpg",
                "images/FastFood/tacos-mexicanos.jpg",
            ],
            activePicDrink:"/images/Drinks/Batido.jpg" ,
            picturesDrink:[
                "/images/Drinks/Batido.jpg" ,
                "/images/Drinks/capucino.jpg",
                "/images/Drinks/chocolate.jpg" ,
                "/images/Drinks/gaseosa.jpg",
                "/images/Drinks/PiñaColada.jpg" ,
                "/images/Drinks/Te frío.jpg"
            ],

            activePicDes:'/images/Deserts/CanastaHelado.jpg',
            picturesDes:[
                '/images/Deserts/CanastaHelado.jpg',
                '/images/Deserts/Flan.jpg',
                '/images/Deserts/Helado.jpg',
                "/images/Deserts/PostreChocolate.jpg",
                "/images/Deserts/PostreFresas.jpg",
                "/images/Deserts/PostreGelatina.jpg"
            ]
            
        }
        
    },
   
    methods:{ 
       Next: function(){
           if(this.count===3){
               this.count=3
           }else{
            this.count=this.count+1;
            console.log(this.count);
           }
       },

       Previous:function() {
        if(this.count===0){
            this.count=0
        }else{
         this.count=this.count-1;
         console.log(this.count);
        }
       },

        changeActivePic1(index){
        this.activePicFast=this.picturesFast[index];
        },

        changeActivePic2(index){
            this.activePicDrink=this.picturesDrink[index];
        },

        changeActivePic3(index){
            this.activePicDes=this.picturesDes[index];
         },
  
    },
       
    
    
})

app.mount('#app');




