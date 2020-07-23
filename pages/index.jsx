import cheerio from 'cheerio'
import axios from 'axios'
import React from 'react'

// client side
function Page({ data }) {
  console.log(data)

  return (
    <div>
      {data.map((el, idx) => {
        return (
          <>
            <h1>{el}</h1>
          </>
        )
      })}
    </div>
  )
}

export default Page
// server side
export async function getServerSideProps() {
  const URL = 'https://www.freelancer.com/jobs/2/'
  const resFromUrl = await axios.get(URL)
  const $ = cheerio.load(resFromUrl.data)
  const data = []
  // đống code để lấy dữ liệu

  $('.JobSearchCard-list').each((i, el) => {
    $(el)
      .find('a.JobSearchCard-primary-heading-link')
      .each((i, el) => data.push($(el).text()))
  })

  return {
    props: {
      data: data,
    },
  }
}
