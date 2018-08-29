const dummyDataMessages = [
  {
    "id": 1,
    "user": "Gertje",
    "otherUserName": "Bert",
    "otherUserImage": "https://ei.marketwatch.com/Multimedia/2015/07/24/Photos/MG/MW-DQ790_ARENDS_20150724151031_MG.jpg?uuid=3e3aa90a-0253-11e6-806d-0015c588dfa6",
    "messages": [
      {
        "sender": "Bert",
        "message": "I am coming to you right now",
      },
    ]
  },
  {
    "id": 2,
    "user": "Gertje",
    "otherUserName": "Jan",
    "otherUserImage": "https://ei.marketwatch.com/Multimedia/2015/07/24/Photos/MG/MW-DQ790_ARENDS_20150724151031_MG.jpg?uuid=3e3aa90a-0253-11e6-806d-0015c588dfa6",
    "messages": [
      {
        "sender": "Jan",
        "message": "I am coming to you right now",
      },
      {
        "sender": "You",
        "receiver": "Bert",
        "message": "Ok!",
      }
    ]
  }
]

module.exports = dummyDataMessages;
