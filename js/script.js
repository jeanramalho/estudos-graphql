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
    let postando = `{createChamado(data: { title: "Face Mask", description: "face-mask" }) 
    {title 
    description}
  }`
    
    console.log(JSON.stringify(postando))
    

      $.ajax({
        method: "POST",
        url: `https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master?query=mutation`,
        data: {createChamado:{data: {title: "mais um teste", description: "oieee"}}} ,
        // Headers: `
        // access-control-allow-origin: https://api-sa-east-1.hygraph.com
        // cf-cache-status: DYNAMIC
        // cf-ray: 73472549dd7425e1-GIG
        // content-encoding: br
        // content-type: application/json
        // date: Tue, 02 Aug 2022 13:26:31 GMT
        // expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
        // nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
        // report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=JzUuRGlUjMlWMDek3eGlqsTXua%2FCW%2BPfIqOpdLLxRoeNG29wXS78seO668b8KI9jO%2FpQbRxOaNUw9a%2BE40n8w9FcugOFomkJyMsVTgF63yc9oQtH%2F06XpBT8YzsbWD%2FYVm2j%2BPMui2i9yoc%3D"}],"group":"cf-nel","max_age":604800}
        // server: cloudflare
        // surrogate-key: cl6aycg090i2k01umeyl23b40-master
        // vary: Origin, Accept-Encoding
        // x-cdn-cache-status: optimize,skip-no-query-op,disable-cdn-not-cacheable,disable-cdn,no-transform-is-mutation,fetch-origin,reject-no-cachekey,update-project
        // x-request-id: cl6c7rule9vai0bkcbrhsnoj0
        // `
       
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
