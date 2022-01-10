const SEND_MESSAGE = "alex_samurai_network/dialogs/SEND-MESSAGE";

type MessagesType = { id: number; message: string };
type DialogsType = { id: number; name: string };

let initialState = {
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How do you like programming?" },
    { id: 3, message: "I love learning React with the IT-KamaSutra." },
    { id: 4, message: "Yo!" },
    { id: 5, message: "Yo!" },
    { id: 6, message: "Yo!" },
  ] as Array<MessagesType>,
  dialogsData: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Nastya" },
    { id: 3, name: "Marsya" },
    { id: 4, name: "Steve" },
    { id: 5, name: "Bill" },
    { id: 6, name: "Elon" },
  ] as Array<DialogsType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any) => {
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

export type SendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageActionCreator = (newMessageBody: string) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
