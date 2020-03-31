require("dotenv").config();
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: process.env.DB_URL
});
//drill 1
// function getAllItems(searchTerm){
//     return db
//         .select()
//         .from('shopping_list')
//         .where('name', 'ILIKE', `%${searchTerm}%`)
//         .then(result=>{
//             console.log(result)
//         })
//     }

// getAllItems('fish');


//drill 2
// function getItemsPaginated(pageNumber){
//     const productsPerPage = 6
//     //const offset = productsPerPage * (pageNumber - 1)
//     return db
//         .select()
//         .from('shopping_list')
//         .limit(productsPerPage)
//         //.offset(offset)
//         .then(result => {
//             console.log(result)
//         })

// }
// getItemsPaginated(1)

//drill 3
// function getItemsAfterDate(daysAgo){
//     return db
//         .select()
//         .from('shopping_list')
//         .where('date_added', '>', db.raw(`now() - '?? days'::INTERVAL`, daysAgo))
//         .then(results =>{
//             console.log(results)
//         })
// }

// getItemsAfterDate(30)

//drill 4
function getTotalCost(){
    return db
        .select ('category')
        .from('shopping_list')
        .groupBy('category')
        .sum('price as total')
        .then(result=>{
            console.log(result)
        })
}
getTotalCost();