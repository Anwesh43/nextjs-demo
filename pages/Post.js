import {useRouter} from 'next/router'
import Layout from '../comps/Layout'
import Block from '../comps/Block'

export default function Post() {
    const router = useRouter()
    return (
      <Layout>
          {Object.keys(router.query).map((key) => <Block key = {`${key}_key`} text = {`${key}: ${router.query[key]}`}/>)}
      </Layout>
    )
}
