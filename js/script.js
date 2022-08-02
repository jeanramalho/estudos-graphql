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
    // var url = "https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master?";

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url);

    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //       console.log(xhr.status);
    //       console.log(xhr.responseText);
    //   }};

    // var data = `{"query":"mutation{createChamado(data: { title: \"Jeanzão\", description: \"face-mask\" }) \n    {title \n    description}}","variables":null}
    // `;

    // xhr.send(data);


      $.ajax({
        method: "POST",
        url: `https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master?`,
        contentType: 0,
        body: "{\n  \"query\": \"mutation{createChamado(data: { title: \\\"Jeanzito\\\", description: \\\"face-mask\\\" }) \\n    {title \\n    description}}\",\n  \"variables\": null\n}",
        executor: 0,
       
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
