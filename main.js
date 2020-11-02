var MarkIconIO = new Vue(
    {
        el: ".App",
        data:
        {
            search_query: null,
            clicked_card: null,
            show_card_modal: false,

            icon:
            {
                selected_size: null,
                inputed_size: null,
                generated_link: null
            },

            icons_data:
            [
                {
                    hover: "effect_1",
                    title:"ActionScript",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/actionscript.svg",
                    link: "https://en.wikipedia.org/wiki/ActionScript"
                },
                {
                    hover: "effect_2",
                    title:"Adonis",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/adonis.svg",
                    link: "https://adonisjs.com/"
                },
                {
                    hover: "effect_3",
                    title:"Android",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/android.svg",
                    link: "https://www.android.com/"
                },
                {
                    hover: "effect_4",
                    title:"Angular",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/angular.svg",
                    link: "https://angular.io/"
                },
                {
                    hover: "effect_5",
                    title:"Assembly",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/assembly.svg",
                    link: "https://en.wikipedia.org/wiki/Assembly_language"
                },
                {
                    hover: "effect_6",
                    title:"Azure",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/azure.svg",
                    link: "https://azure.microsoft.com/"
                },
                {
                    hover: "effect_7",
                    title:"Babel",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/babel.svg",
                    link: "https://babeljs.io/"
                },
                {
                    hover: "effect_8",
                    title:"CircleCI",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/circleci.svg",
                    link: "https://circleci.com/"
                },
                {
                    hover: "effect_9",
                    title:"CMake",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/cmake.svg",
                    link: "https://cmake.org/"
                },
                {
                    hover: "effect_10",
                    title:"C++",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/cpp.svg",
                    link: "https://isocpp.org/"
                },
                {
                    hover: "effect_11",
                    title:"C#",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/csharp.svg",
                    link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                },
                {
                    hover: "effect_12",
                    title:"CSS",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/css.svg",
                    link: "https://en.wikipedia.org/wiki/CSS"
                },
                {
                    hover: "effect_13",
                    title:"C",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/c.svg",
                    link: "https://en.wikipedia.org/wiki/C_(programming_language)"
                },
                {
                    hover: "effect_14",
                    title:"Cucumber",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/cucumber.svg",
                    link: "https://cucumber.io/"
                },
                {
                    hover: "effect_15",
                    title:"Dart",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/dart.svg",
                    link: "https://dart.dev/"
                },
                {
                    hover: "effect_16",
                    title:"Django",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/django.svg",
                    link: "https://www.djangoproject.com/"
                },
                {
                    hover: "effect_17",
                    title:"Elixir",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/elixir.svg",
                    link: "https://elixir-lang.org/"
                },
                {
                    hover: "effect_18",
                    title:"FireBase",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/firebase.svg",
                    link: "https://firebase.google.com/"
                },
                {
                    hover: "effect_19",
                    title:"Fortran",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/fortran.svg",
                    link: "https://fortran-lang.org/"
                },
                {
                    hover: "effect_20",
                    title:"GitLab",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/gitlab.svg",
                    link: "https://about.gitlab.com/"
                },
                {
                    hover: "effect_21",
                    title:"Git",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/git.svg",
                    link: "https://git-scm.com/"
                },
                {
                    hover: "effect_22",
                    title:"Go",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/go.svg",
                    link: "https://golang.org/"
                },
                {
                    hover: "effect_23",
                    title:"Gradle",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/gradle.svg",
                    link: "https://gradle.org/"
                },
                {
                    hover: "effect_24",
                    title:"GraphQL",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/graphql.svg",
                    link: "https://graphql.org/"
                },
                {
                    hover: "effect_25",
                    title:"Groovy",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/groovy.svg",
                    link: "http://groovy-lang.org/"
                },
                {
                    hover: "effect_26",
                    title:"Grunt",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/grunt.svg",
                    link: "https://gruntjs.com/"
                },
                {
                    hover: "effect_27",
                    title:"Gulp",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/gulp.svg",
                    link: "https://gulpjs.com/"
                },
                {
                    hover: "effect_28",
                    title:"Haml",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/haml.svg",
                    link: "https://haml.info/"
                },
                {
                    hover: "effect_29",
                    title:"Haskell",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/haskell.svg",
                    link: "https://www.haskell.org/"
                },
                {
                    hover: "effect_30",
                    title:"Heroku",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/heroku.svg",
                    link: "https://www.heroku.com/"
                },
                {
                    hover: "effect_31",
                    title:"HTML",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/html.svg",
                    link: "https://en.wikipedia.org/wiki/HTML5"
                },
                {
                    hover: "effect_32",
                    title:"Ionic",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/ionic.svg",
                    link: "https://ionicframework.com/"
                },
                {
                    hover: "effect_33",
                    title:"JavaScript",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/javascript.svg",
                    link: "https://www.javascript.com/"
                },
                {
                    hover: "effect_34",
                    title:"Java",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/java.svg",
                    link: "https://www.java.com/"
                },
                {
                    hover: "effect_35",
                    title:"Jenkins",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/jenkins.svg",
                    link: "https://www.jenkins.io/"
                },
                {
                    hover: "effect_36",
                    title:"Jest",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/jest.svg",
                    link: "https://jestjs.io/"
                },
                {
                    hover: "effect_37",
                    title:"Jinja",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/jinja.svg",
                    link: "https://jinja.palletsprojects.com/"
                },
                {
                    hover: "effect_38",
                    title:"JSON",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/json.svg",
                    link: "https://www.json.org/"
                },
                {
                    hover: "effect_39",
                    title:"Julia",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/julia.svg",
                    link: "https://julialang.org/"
                },
                {
                    hover: "effect_40",
                    title:"Jupyter",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/jupyter.svg",
                    link: "https://jupyter.org/"
                },
                {
                    hover: "effect_41",
                    title:"Kivy",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/kivy.svg",
                    link: "https://kivy.org/"
                },
                {
                    hover: "effect_42",
                    title:"Kotlin",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/kotlin.svg",
                    link: "https://kotlinlang.org/"
                },
                {
                    hover: "effect_43",
                    title:"Laravel",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/laravel.svg",
                    link: "https://laravel.com/"
                },
                {
                    hover: "effect_44",
                    title:"Lua",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/lua.svg",
                    link: "https://www.lua.org/"
                },
                {
                    hover: "effect_45",
                    title:"MarkDown",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/markdown.svg",
                    link: "https://www.markdownguide.org/"
                },
                {
                    hover: "effect_46",
                    title:"MatLab",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/matlab.svg",
                    link: "https://en.wikipedia.org/wiki/MATLAB"
                },
                {
                    hover: "effect_47",
                    title:"Nginx",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/nginx.svg",
                    link: "https://www.nginx.com/"
                },
                {
                    hover: "effect_48",
                    title:"NodeJS",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/nodejs.svg",
                    link: "https://nodejs.org/"
                },
                {
                    hover: "effect_49",
                    title:"Nuget",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/nuget.svg",
                    link: "https://www.nuget.org/"
                },
                {
                    hover: "effect_50",
                    title:"Nuxt",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/nuxt.svg",
                    link: "https://nuxtjs.org/"
                },
                {
                    hover: "effect_51",
                    title:"Pascal",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/pascal.svg",
                    link: "https://en.wikipedia.org/wiki/Pascal_(programming_language)"
                },
                {
                    hover: "effect_52",
                    title:"Perl",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/perl.svg",
                    link: "https://www.perl.org/"
                },
                {
                    hover: "effect_53",
                    title:"PHP",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/php.svg",
                    link: "https://www.php.net/"
                },
                {
                    hover: "effect_54",
                    title:"ProLog",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/prolog.svg",
                    link: "https://en.wikipedia.org/wiki/Prolog"
                },
                {
                    hover: "effect_55",
                    title:"Pug",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/pug.svg",
                    link: "https://pugjs.org/"
                },
                {
                    hover: "effect_56",
                    title:"Python",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/python.svg",
                    link: "https://www.python.org/"
                },
                {
                    hover: "effect_57",
                    title:"React",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/react.svg",
                    link: "https://reactjs.org/"
                },
                {
                    hover: "effect_58",
                    title:"R",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/r.svg",
                    link: "https://www.r-project.org/"
                },
                {
                    hover: "effect_59",
                    title:"Ruby",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/ruby.svg",
                    link: "https://www.ruby-lang.org/"
                },
                {
                    hover: "effect_60",
                    title:"Rust",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/rust.svg",
                    link: "https://www.rust-lang.org/"
                },
                {
                    hover: "effect_61",
                    title:"SASS",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/sass.svg",
                    link: "https://sass-lang.com/"
                },
                {
                    hover: "effect_62",
                    title:"Scala",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/scala.svg",
                    link: "https://www.scala-lang.org/"
                },
                {
                    hover: "effect_63",
                    title:"Sketch",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/sketch.svg",
                    link: "https://www.sketch.com/"
                },
                {
                    hover: "effect_64",
                    title:"Stylus",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/stylus.svg",
                    link: "https://stylus-lang.com/"
                },
                {
                    hover: "effect_65",
                    title:"Swift",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/swift.svg",
                    link: "https://swift.org/"
                },
                {
                    hover: "effect_66",
                    title:"TerraForm",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/terraform.svg",
                    link: "https://www.terraform.io/"
                },
                {
                    hover: "effect_67",
                    title:"TeX",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/tex.svg",
                    link: "https://www.latex-project.org/"
                },
                {
                    hover: "effect_68",
                    title:"TypeScript",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/typescript.svg",
                    link: "https://www.typescriptlang.org/"
                },
                {
                    hover: "effect_69",
                    title:"Vue",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/vue.svg",
                    link: "https://vuejs.org/"
                },
                {
                    hover: "effect_70",
                    title:"WebPack",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/webpack.svg",
                    link: "https://webpack.js.org/"
                },
                {
                    hover: "effect_71",
                    title:"XML",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/xml.svg",
                    link: "https://www.xml.com/"
                },
                {
                    hover: "effect_72",
                    title:"YAML",
                    image:"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/96b211be6f4eaf7d82990400c06d0e2787136a4d/icons/yaml.svg",
                    link: "https://yaml.org/"
                }
            ]
        },

        computed:
        {
            result_query()
            {
                if (this.search_query)
                {
                    return this.icons_data.filter((item) =>
                    {
                        return this.search_query
                            .toLowerCase()
                            .split(" ")
                            .every((v) => item.title.toLowerCase().includes(v))
                    })
                }
                else
                {
                    return this.icons_data
                }
            }
        },

        methods:
        {
            capture_item(passed_item)
            {
                this.clicked_card = passed_item

                this.show_card_modal = true
            },
            
            validate_width()
            {
                if(this.icon.selected_size == null)
                {
                    alert("ERRO: O tamanho do ícone não foi SELECIONADO!")
                }
                else if(this.icon.selected_size != "custom")
                {
                    this.icon.generated_link = this.generate_link(this.clicked_card.link, this.clicked_card.title, this.clicked_card.title, this.icon.selected_size, this.clicked_card.image)

                    this.copy_to_clipboard(this.icon.generated_link)
                }
                else
                {
                    if(this.icon.inputed_size == null || this.icon.inputed_size == "")
                    {
                        alert("ERRO: O tamanho do ícone não foi INFORMADO!")
                    }
                    else
                    {
                        this.icon.generated_link = this.generate_link(this.clicked_card.link, this.clicked_card.title, this.clicked_card.title, this.icon.inputed_size, this.clicked_card.image)

                        this.copy_to_clipboard(this.icon.generated_link)
                    }
                }
            },

            
            generate_link(brand_url, image_title, image_alternate, image_width, image_source)
            {
                return "<a href='"+ brand_url +"'><img title='"+ image_title +"' alt='"+ image_alternate +" Icon' width='"+ image_width +"' src='"+ image_source +"'></a>"
            },

            copy_to_clipboard(passed_text)
            {
                this.$copyText(passed_text)
                .then(function()
                {
                    alert("O código do ícone foi copiado para a Área de Transferência.\nUse o colar(Ctrl+V) no documento desejado!")
                })
            }
        }
    }
)