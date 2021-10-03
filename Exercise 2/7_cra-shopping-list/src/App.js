import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addItems = (item, quantity, unit) => {
    return () => {
      const ArraySearch = this.state.items.findIndex((element) => {
        if(element.value === item) {
          return true;
        } else {
          return false;
        }
      });
      if(ArraySearch == -1) {
        this.setState({items: [...this.state.items, {id: this.state.items.length + 1, value: item, qty: quantity, unit: unit}]});
      } else {
        let NewItems = [...this.state.items];
        NewItems[ArraySearch].qty +=quantity;
        this.setState({ items: NewItems });
      }
    }
  }

  

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={  this.addItems('Carrots', 1, 'x')}>Carrots</button>
      <button onClick={  this.addItems('Strawberries', 12, 'x')}>Strawberries</button>
      <button onClick={  this.addItems('Yoghurt', 3, 'ltr')}>Yoghurt</button>
      <button onClick={  this.addItems('Beer', 8, 'ltr')}>Beer</button>
    </div>
  }
}

export default App;