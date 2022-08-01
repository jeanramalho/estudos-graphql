const card = document.getElementById('card')

function main () {
    const getAllChamados = `{
        chamados {
          title
          description
          date
        }
      }`

    getChamados(getAllChamados)

}

async function getChamados (query) {
    let res =  await fetch(`https://management.hygraph.com/graphql?query=query${query}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => console.log(res));
}

main()