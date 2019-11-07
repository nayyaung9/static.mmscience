import React from 'react'
import Layout from '../components/layout'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'

import Author from '../components/posts/author'

import theLifeOfSun from '../../contents/videos/the-life-of-sun.mp4'
import videoCreator from '../../contents/images/author/tun-lin-aung.jpg'
import PascalTriangle from '../../contents/videos/pascal-triangle.mp4'
import mp4_01 from '../../contents/videos/gravity-and-human-body.mp4'

const VideosHomePage = () => {
  return (
    <Layout>
      <Helmet title="MM Science | Learning Video" />
      <main style={{ marginTop: '80px '}}>
        <Container fixed>
          <div css={css`
            background-color: #1976d2;
            color: #fff;
            padding: 10px;
            text-align: center;
            margin: 10px auto;
            border-radius: 10px;
          `}>
            This page is in developing mode
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
              css={css`
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                cursor: pointer;
              `}>
                <video controls style={{ width: '100%' }}>
                  <source src={theLifeOfSun} type="video/mp4"/>
                </video>
                <div css={css`
                  padding: 10px;
                `}>
                  <Author src={videoCreator} name="Tun Lin Aung" date="Nov, 6" timeToRead="4:36"/>
                  <Typography paragraph>
                    နေရောင်ခြည်ရဲ့ သက်တမ်းဟာ ကျွန်ုပ်တို့ ထင်တာထက် ပိုကြီးတယ်
                    အလင်းရောင်ဟာ နေမျက်နှာပြင်မှ ကမ္ဘာထံရောက်ရှိဖို့ အချိန် ၈ မိနစ် စွန်းစွန်းကြာပါတယ်။ ဒါပေမဲ့ ဒီအလင်းဟာ နေရဲ့အတွင်းသား ထဲကနေပြီး ၎င်းရဲ့ မျက်နှာပြင်ထံရောက်ဖို့ အချိန်ဘယ်လောက်ကြာပါသလဲ။ အံအားသင့်စရာပါပဲ၊ ဒီနေ့ ကျုပ်တို့ထံရောက်ရှိလာတဲ့ နေရောင်ခြည်ဟာ 
                    လူသားတွေ အဝတ် ဝတ်တတ်ခါစအချိန် လွန်ခဲ့တဲ့ ရေခဲခေတ် နှစ်ခေတ်လောက်က ခရီးစတင်ခဲ့လို့ အဖြေက နှစ်ပေါင်း ထောင်ချီပါတယ်။ ဒါကို Random Walk ပြဿ နာနဲ ့သရုပ်ဖော်လျက် ရှင်းပြထားပါတယ်
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
              css={css`
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                cursor: pointer;
              `}>
                <video controls style={{ width: '100%' }}>
                  <source src={PascalTriangle} type="video/mp4"/>
                </video>
                <div css={css`
                  padding: 10px;
                `}>
                  <Author src={videoCreator} name="Tun Lin Aung" date="Nov, 6" timeToRead="4:36"/>
                  <Typography paragraph>
                  ပါစကယ်တြိဂံရဲ့ သင်္ချာဆိုင်ရာ လျို့ဝှက်ချက်များ
                  <Link to='facts/pascal-triangle/'>စာသား သီးသန့် ဖတ်ရှုရန်</Link>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
              css={css`
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
                cursor: pointer;
              `}>
                <video controls style={{ width: '100%' }}>
                  <source src={mp4_01} type="video/mp4"/>
                </video>
                <div css={css`
                  padding: 10px;
                `}>
                  <Author src={videoCreator} name="Tun Lin Aung" date="Nov, 6" timeToRead="4:36"/>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
       
      </main>
    </Layout>
  )
}

export default VideosHomePage;

// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/layout'
// import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography'
// import { Link } from 'gatsby'
// import Grid from '@material-ui/core/Grid'
// import { css } from '@emotion/core'
// import { Helmet } from 'react-helmet'


// export default ({data}) => {
//   return (
//     <Layout>
//       <Helmet title="MM Science | Learning Video" />
//       <main style={{ marginTop: '70px' }}>
//         <Container fixed>
//           <Grid container spacing={2}>
//             mp4_01

//             {data.allMarkdownRemark.edges.map(({node}) => (
//               <Grid item xs={12} sm={6}>
//                 <div 
//                   style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)' }}
//                   css={css`
//                     background-color: #fff;
//                     border-radius: 5px;
//                     box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
//                     cursor: pointer;
//                   `}>
//                     <video controls style={{ width: '100%' }}>
//                       <source src={node.frontmatter.videoSourceURL} type="video/mp4"/>
//                     </video>
//                     {console.log(mp4_01)}
//                     <p>{node.frontmatter.videoTitle}</p>
//                 </div>
//               </Grid>
//             ))}
            

//           </Grid>
//         </Container>
       
//       </main>
//     </Layout>
//   )
// }

// export const query = graphql`
// query {
//   allMarkdownRemark(filter: {frontmatter: {type: {eq: "video"}}}) {
//     edges {
//       node {
//         id
//         frontmatter {
//           title
//           videoSourceURL
//           videoTitle
//         }
//       }
//     }
//   }
// }

// `