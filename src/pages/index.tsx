import Head from 'next/head'
import { Flex, Text } from '@chakra-ui/react'
import Menu from '@/components/Menu'
import dynamic from 'next/dynamic'
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { useStyles } from '@/context/StylesContext';
import { CircleProgressBar, CircleProgressBarContainer } from '@/components/CircleProgressBar';
import CircleChartGroup from '@/components/CircleChartGroup';
import Filter from '@/components/Filter';
import { useDb } from '@/hook/useDb';


const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const data = [{
  label: "Goiania",
  value: 20,
  color: '#C1E505'
},
{
  label: "Salvador",
  value: 40,
  color: '#C1E505'
},
{
  label: "Rio de Janeiro",
  value: 80,
  color: '#C1E505'
},
{
  label: "Para",
  value: 10,
  color: '#C1E505'
},
{
  label: "Vitoria da Conquista",
  value: 60,
  color: '#C1E505'
}]


const schools = [
  {
    "id": 1,
    "name": "Escola Estadual João de Barro",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 2,
        "sites": ["siteA1", "siteB1", "siteC1"]
      },
      "violence": {
        "professorAndStudent": 5,
        "studentAndStudent": 3
      },
      "ouvidoria": {
        "amount": 7,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          },
          {
            "id": 2,
            "name": "Manifestação 2",
            "type": "Violência na Escola"
          },
          {
            "id": 3,
            "name": "Manifestação 3",
            "type": "Ameaça"
          }
        ]
      }
    }
  },
  {
    "id": 2,
    "name": "Escola Municipal Dom Bosco",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Anápolis",
    "metrics": {
      "darkWeb": {
        "amount": 1,
        "sites": ["siteA2", "siteB2"]
      },
      "violence": {
        "professorAndStudent": 2,
        "studentAndStudent": 4
      },
      "ouvidoria": {
        "amount": 3,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          },
          {
            "id": 2,
            "name": "Manifestação 2",
            "type": "Violência na Escola"
          }
        ]
      }
    }
  },
  {
    "id": 3,
    "name": "Escola Estadual Maria Clara Machado",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Catalão",
    "metrics": {
      "darkWeb": {
        "amount": 0,
        "sites": []
      },
      "violence": {
        "professorAndStudent": 0,
        "studentAndStudent": 1
      },
      "ouvidoria": {
        "amount": 2,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          }
        ]
      }
    }
  },
  {
    "id": 4,
    "name": "Escola Municipal Antônio Rodrigues",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 3,
        "sites": ["siteA4"]
      },
      "violence": {
        "professorAndStudent": 6,
        "studentAndStudent": 9
      },
      "ouvidoria": {
        "amount": 5,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Ameaça"
          },
          {
            "id": 2,
            "name": "Manifestação 2",
            "type": "Violência na Escola"
          }
        ]
      }
    }
  },
  {
    "id": 5,
    "name": "Escola Estadual Rui Barbosa",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Aparecida de Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 4,
        "sites": ["siteA5", "siteB5", "siteC5", "siteD5"]
      },
      "violence": {
        "professorAndStudent": 2,
        "studentAndStudent": 7
      },
      "ouvidoria": {
        "amount": 1,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Violência na Escola"
          }
        ]
      }
    }
  },
  {
    "id": 6,
    "name": "Escola Municipal Carlos Drummond de Andrade",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 0,
        "sites": []
      },
      "violence": {
        "professorAndStudent": 1,
        "studentAndStudent": 0
      },
      "ouvidoria": {
        "amount": 6,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Ameaça"
          },
          {
            "id": 2,
            "name": "Manifestação 2",
            "type": "Violência na Escola"
          }
        ]
      }
    }
  },
  {
    "id": 7,
    "name": "Escola Estadual Santos Dumont",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 1,
        "sites": ["siteA7"]
      },
      "violence": {
        "professorAndStudent": 4,
        "studentAndStudent": 5
      },
      "ouvidoria": {
        "amount": 0,
        "manifestacao": []
      }
    }
  },
  {
    "id": 8,
    "name": "Escola Municipal Monteiro Lobato",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 2,
        "sites": ["siteA8", "siteB8"]
      },
      "violence": {
        "professorAndStudent": 3,
        "studentAndStudent": 6
      },
      "ouvidoria": {
        "amount": 1,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          }
        ]
      }
    }
  },
  {
    "id": 9,
    "name": "Escola Estadual Castro Alves",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 0,
        "sites": []
      },
      "violence": {
        "professorAndStudent": 0,
        "studentAndStudent": 0
      },
      "ouvidoria": {
        "amount": 2,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          }
        ]
      }
    }
  },
  {
    "id": 10,
    "name": "Escola Municipal Raimundo Nonato",
    "description": "Uma escola pública localizada em algum lugar de Goiás.",
    "location": "Goiânia",
    "metrics": {
      "darkWeb": {
        "amount": 3,
        "sites": ["siteA10", "siteB10"]
      },
      "violence": {
        "professorAndStudent": 1,
        "studentAndStudent": 2
      },
      "ouvidoria": {
        "amount": 2,
        "manifestacao": [
          {
            "id": 1,
            "name": "Manifestação 1",
            "type": "Saúde Mental"
          },
          {
            "id": 2,
            "name": "Manifestação 2",
            "type": "Violência na Escola"
          }
        ]
      }
    }
  }
]



export default function Home() {
  const { theme } = useStyles()
  const {schoolList } = useDb()

return (
    <>
      <Head>
        <title>Escola Segura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./avatar.svg" />
      </Head>

      <Flex>
        <Menu />

        <Flex padding="24px" background={theme.background} w="calc(100vw - 285px)" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap" gap="16px" >
          {/* <Filter /> */}

          <Card title='Incidência de violência entre alunos' footer='Baseado no número de alertas registrados pelas escolas usuárias do Escola Segura da região. É de extrema importância a mobilização de material de conscientização.'>
            <CircleChartGroup data={data} />
          </Card>
          
          <Card title='Scanner de palavras na DarkWeb'>
            <Flex gap="8px" flexDir="column">
              {schools.splice(0,5).map(item => {return (
                <ProgressBar key={item.id} label={item.name} percent={(item.metrics.darkWeb.amount * 10) }/>
              )})}
            </Flex>
          </Card>

         
        </Flex>
      </Flex>
    </>
  )
}


