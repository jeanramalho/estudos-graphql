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
            let data = res.data

            console.log(res.data)
        })

}




main()