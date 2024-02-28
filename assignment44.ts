function sandwich(...items: string[]): void {
        console.log('Order Sandwich');
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`)
        }

}

console.log('Happy Eating Sandwiches, satisfy your craving.')

sandwich('cucumber', 'cheese', 'sauce')
sandwich('Ketchup', 'Onion', 'Chicken')
sandwich('Mayonise', 'tacos', 'tomato')
