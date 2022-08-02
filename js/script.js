const card = document.getElementById('card')

function main() {
    const getAllChamados = `{
        chamados {
          title
          description
          date
        }
      }`

    $.ajax({
            method: "GET",
            url: `https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master?query=query${getAllChamados}`,
        })
        .done(function(res) {
            let data = res.data.chamados
            let div = document.getElementById('cont')

            data.map(item => {
                output = `
              <div class="card" id="card">
                <h2 class="title" id="title">${item.title}</h2>
                <p class="desc" id="desc">${item.description}</p>
                <h4 class="date" id="date">${item.date}</h4>
              </div>
              `
                console.log(output)
                div.innerHTML += output

            })

        })

}

main()

function postTest() {
    let postando = `mutation{createChamado(data: { title: "Face Mask", description: "face-mask" }) 
    {title 
    description}}
  }`
    
    console.log(JSON.stringify(postando))
    

      $.ajax({
        method: "POST",
        url: `https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master?query=`,
        contentType: "application/json",
        data: JSON.stringify(postando)       
       
    })
    .done(function(res) {
        console.log(res)
        console.log("Salvo com sucesso")

        })
    .fail(function(res) {
      console.log(res)
      console.log("não deu bom")
    }) 

    }
