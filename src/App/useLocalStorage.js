import React from 'react';

function useLocalStorage (itemName, initialValue) {
    const [item, setItemTodos] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() =>{
      /*El setTimeout lo usamos para suponer que es un llamado asincrono */
      setTimeout(() =>{
        /*Utilizamos el Try and Catch para manejar el estado de error*/
        try{
          let localStorageItem = localStorage.getItem(itemName);
          let parseItems;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parseItems = initialValue;
          }else{
            parseItems = JSON.parse(localStorageItem);
            setItemTodos(parseItems);
          }
  
          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItemTodos(newItem); 
    }
  
    /*Si tenemos 4 elementos del custom Hook, lo mas recomendable es 
    retornarlo como objeton, para que llamemos desde otro componente
    no tengamos que recordar la posicion en la que están*/
    return {item, saveItems, loading, error};
};

export { useLocalStorage }

/* const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'Tomar el curso', completed: false},
  { text: 'llorar', completed: false},
  { text: 'lAla', completed: false},
  { text: 'jugar', completed: false},
  { text: 'play', completed: true},
];

localStorage.setItem('todos_V1', JSON.stringify(defaultTodos)); */
/* localStorage.removeItemItem('todos_V1', defaultTodos); */