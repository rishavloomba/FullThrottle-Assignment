// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let Users = [{
  id: "W012A3CDE",
  real_name: "Egon Spengler",
  tz: "America/Los_Angeles",
  activity_periods: [{
      start_time: "Feb 1 2020  1:33PM",
      end_time: "Feb 1 2020 1:54PM"
    },
    {
      start_time: "Mar 1 2020  11:11AM",
      end_time: "Mar 1 2020 2:00PM"
    },
    {
      start_time: "Mar 16 2020  5:33PM",
      end_time: "Mar 16 2020 8:02PM"
    }
  ]
},
{
  id: "W07QCRPA4",
  real_name: "Glinda Southgood",
  tz: "Asia/Kolkata",
  activity_periods: [{
      start_time: "Feb 1 2020  1:33PM",
      end_time: "Feb 1 2020 1:54PM"
    },
    {
      start_time: "Mar 1 2020  11:11AM",
      end_time: "Mar 1 2020 2:00PM"
    },
    {
      start_time: "Mar 16 2020  5:33PM",
      end_time: "Mar 16 2020 8:02PM"
    }
  ]
}];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json(JSON.stringify({
    ok: true,
    members: Users
  }))
}
