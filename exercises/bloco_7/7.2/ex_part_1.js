const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryName = order.order.delivery.deliveryPerson;
  const nome = order.name;
  const phoneNumber = order.phoneNumber;
  const address = Object.values(order.address)
  return `Olá ${deliveryName}, entrega para: ${nome}, Telefone: ${phoneNumber}, R. ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const nome = (order.name = 'Luiz Silva');
  const discount = 10;
  const pizza = order.order.pizza;
  const drinks = order.order.drinks;
  const payment = order.payment;
  const arrayPizzas = Object.keys(pizza);
  const arrayDrinks = Object.keys(drinks);
  const paymentTotal = (payment.total = (pizza.marguerita.price + pizza.pepperoni.price + drinks.coke.price + order.order.delivery.price - discount));
  return `Olá ${nome}, o total do seu pedido de ${arrayPizzas[0]}, ${arrayPizzas[1]} e ${drinks[arrayDrinks[0]].type} é R$ ${paymentTotal}.`
}

console.log(orderModifier(order));