var userinp = prompt("Enter your area's temperature in celsius (0-40)")
if ( userinp >= 38) {
    document.write('<center>' +'<div class="cards m-auto mt-5 " style="width: 18rem;">' +
    '<img src="hot.png" class="  card-img-top cardz " alt="...">'+
    '<div class="card-body">' +
      '<h5 class="card-title fs-3"> today is hot🌡  </h5>'+ 
      '<p>  </p>' +
      '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
     
  '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+'</div>' +'</center>')
}
else if (userinp >=34){
  document.write('<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
'<img src="sunny.webp" class="card-img-top cardz" alt="...">'+
'<div class="card-body">' +
  '<h5 class="card-title fs-3"> mostly sunny ☀️</h5>'+ 
  '<p>  </p>' +
  '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
'</div>' +'<h1>' + userinp + "°C" +'</h1>' +
'</div>' +'</center>')
}
    else if (userinp >=30){
      document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
    '<img src="cloudy.jpeg" class="card-img-top" alt="...">'+
    '<div class="card-body">' +
      '<h5 class="card-title fs-3"> weather is cloudy ☁️ </h5>'+ 
      '<p>  </p>' +
      '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
    '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
  '</div>'  +'</center>')
}
        else if (userinp >=26)
          {
            document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
          '<img src="sunRain.png" class="card-img-top" alt="...">'+
          '<div class="card-body">' +
            '<h5 class="card-title fs-3"> ⛅️🌤  </h5>'+ 
            '<p>  </p>' +
            '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
          '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
        '</div>'  +'</center>')
      }
            else if (userinp >=22)
              {
                document.write( '<center>' +'<div class="cards card m-auto mt-5" style="width: 18rem;">' +
              '<img src="lightning.png" class="card-img-top" alt="...">'+
              '<div class="card-body">' +
                '<h5 class="card-title fs-3"> 🌩⚡️ </h5>'+ 
                '<p>  </p>' +
                '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
              '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
            '</div>'  +'</center>')
          }
                else if (userinp >=18)
                  {
                    document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
                  '<img src="spring.png" class="card-img-top" alt="...">'+
                  '<div class="card-body">' +
                    '<h5 class="card-title fs-3">  🌲🌳🌸☘️🍀 </h5>'+ 
                    '<p>  </p>' +
                    '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                  '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                '</div>'  +'</center>')
              }
                    else if (userinp >=14)
                      {
                        document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
                      '<img src="autumn.png" class="card-img-top" alt="...">'+
                      '<div class="card-body">' +
                        '<h5 class="card-title fs-3"> Autumn🍂🍁  </h5>'+ 
                        '<p>  </p>' +
                        '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                      '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                    '</div>'  +'</center>')
                  }
                        else if (userinp >=10)
                          {
                            document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
                          '<img src="windy.png" class="card-img-top" alt="...">'+
                          '<div class="card-body">' +
                            '<h5 class="card-title fs-3"> windy🌊  </h5>'+ 
                            '<p>  </p>' +
                            '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                          '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                        '</div>'  +'</center>')
                      }
                            else if (userinp >=6)
                              {
                                document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
                              '<img src="coldrainy.png" class="card-img-top" alt="...">'+
                              '<div class="card-body">' +
                                '<h5 class="card-title fs-3"> weather is beautiful ⛈ </h5>'+ 
                                '<p>  </p>' +
                                '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                              '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                            '</div>'  +'</center>')
                          }
                                else if (userinp >=4)
                                  {
                                    document.write( '<center>' +'<div class=" cards card m-auto mt-5" style="width: 18rem;">' +
                                  '<img src="cold.webp" class="card-img-top" alt="...">'+
                                  '<div class="card-body">' +
                                    '<h5 class="card-title fs-3">cold⛄️  </h5>'+ 
                                    '<p>  </p>' +
                                    '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                                  '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                                '</div>'  +'</center>')
                              }
                              else if (userinp >=0)
                                {
                                  document.write( '<center>' +'<div class="card cards m-auto mt-5" style="width: 18rem;">' +
                                '<img src="snowfall.jpeg" class="card-img-top" alt="...">'+
                                '<div class="card-body">' +
                                  '<h5 class="card-title fs-3">❄️ snowfall❄️ </h5>'+ 
                                  '<p>  </p>' +
                                  '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                                '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                              '</div>'  +'</center>')
                            }
                        //     else
                        //     {
                        //       document.write( '<center>' +'<div class="card m-auto mt-5" style="width: 18rem;">' +
                        //     '<img src="cloudy.jpeg" class="card-img-top" alt="...">'+
                        //     '<div class="card-body">' +
                        //       '<h5 class="card-title fs-3"> weather is cloudy  </h5>'+ 
                        //       '<p>  </p>' +
                        //       '<a href="https://www.google.com/search?q=whather&sca_esv=cb7836cf60c7f552&sxsrf=ADLYWIIyzThmoguLiZZ_FXtj_JyDrP_cJQ%3A1716729820850&ei=3DdTZp3DM73hkdUPtZGiiAs&ved=0ahUKEwidoZb5tKuGAxW9cKQEHbWICLEQ4dUDCBA&uact=5&oq=whather&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3doYXRoZXIyBxAjGLECGCcyBxAjGLECGCcyBxAjGLECGCcyFBAAGIAEGJECGLEDGIMBGMkDGIoFMg4QABiABBiRAhixAxiKBTILEAAYgAQYkgMYigUyCxAAGIAEGJIDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyDRAAGIAEGLEDGEMYigVI7zFQrwhYuylwAngBkAEEmAHIAqABvhmqAQUyLTkuM7gBA8gBAPgBAZgCCqACshGoAhTCAgoQABiwAxjWBBhHwgIHECMYJxiuAsICCBAAGIAEGKIEwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEAAYgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIPEAAYgAQYQxiKBRhGGIACwgIbEAAYgAQYQxiKBRhGGIACGJcFGIwFGN0E2AECmAMUiAYBkAYCugYGCAEQARgLugYGCAIQARgTkgcHMi4wLjcuMaAHt2k&sclient=gws-wiz-serp" class="btn w-50 btn-danger fs-3">click</a>'+
                        //     '</div>'  +'<h1>' + userinp + "°C" +'</h1>'+
                        //   '</div>'  +'</center>')
                        // }