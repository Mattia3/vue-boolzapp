Vue.config.devtools = true;

const vueApp = new Vue ({
  el: "#root",
  data:{
    contacts: [
      {
        name: "Michele",
        avatar: "img/avatar_1.jpg",
        message:[
          {
            date:"10/01/2020 15:30:55",
            text:"Hai portato a spasso il cane?",
            status:"sent"
          },
          {
            date:"10/01/2020 16:30:50",
            text:"Ricordati di dargli da mangiare",
            status:"sent"
          },
          {
            date:"10/01/2020 17:30:50",
            text:"Tutto fatto!",
            status:"received"
          }
        ],
      },
      {
        name: "Fabio",
        avatar: "img/avatar_2.jpg",
        message:[
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent"
          },
          {
            date: "20/03/2020 16:30:00",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received"
          },
          {
            date: "20/03/2020 16:30:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent"
          }
        ],
      },
      {
        name: "Samuele",
        avatar: "img/avatar_3.jpg",
        message:[
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received"
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent"
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received"
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: 'img/avatar_4.jpg',
        message:[
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent"
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received"
          }
        ]
      }
    ],

    activeChat: {},
    array: "",
    filterText:"",
  },


  methods:{
    onClickChat(chatDaCliccare){
      this.activeChat = chatDaCliccare;
    },

    onAddClick(){
      let textPush = {date:"10/01/2020 15:30:55",
      text: this.array,
      status:"sent"}
      this.activeChat.message.push(textPush)
      this.array=""
      setTimeout(() => {
        let arrayFrasi = ["Ci vediamo venerdi", "ok", "Andiamo a fare la spesa", "GGWP"]
        let mathFrasi = Math.round(Math.random() * 3)
        let textPush = {date:"10/01/2020 15:30:55",
          text: arrayFrasi[mathFrasi],
          status:"received"}
          this.activeChat.message.push(textPush)
          this.scrollToBottom();
      }, 3000);
      this.scrollToBottom();
    },

    getAdd(){
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.filterText.toLowerCase().trim())
      })
    },

    scrollToBottom() {
      setTimeout(() => {
        this.$refs.containerCentral.scrollTop =
          this.$refs.containerCentral.scrollHeight;
      }, 0);
    },
  },

  created: function(){
    console.log("created")
    this.activeChat = this.contacts[0]
  },
})