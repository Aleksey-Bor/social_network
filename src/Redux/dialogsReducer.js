const SEND_MESSAGE = "alex_samurai_network/dialogs/SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How do you like programming?" },
    { id: 3, message: "I love learning React with the IT-KamaSutra." },
    { id: 4, message: "Yo!" },
    { id: 5, message: "Yo!" },
    { id: 6, message: "Yo!" },
  ],
  dialogsData: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Nastya" },
    { id: 3, name: "Marsya" },
    { id: 4, name: "Steve" },
    { id: 5, name: "Bill" },
    { id: 6, name: "Elon" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 777, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
