import { VisibilityFilters, ADD_TODO, ADD_TODOs,isAuthencation ,VISSIBLE_MODALS } from './Action';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  isAuthenticated: false,
  visible: true,
  dataSource: [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: '09209434'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: '131231'
  }],
  columns: [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Number',
    dataIndex: 'phone',
    key: 'phone'
  }
  ]
}
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(initialState);
      return state;
    case ADD_TODOs:
    var object= action.value;
    return Object.assign({}, state, {
      dataSource: [
        ...state.dataSource,
        object
      ]
    })
    case isAuthencation:
    return Object.assign({},state,{
      isAuthenticated:true
    })
    default:
    return initialState;
  }
 
}
export default todoApp;