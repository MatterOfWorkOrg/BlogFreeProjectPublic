interface FollowersType {
  partisan?: Number,
  biPartisan?: Number
}

interface SubActivity {
  name: string,
  follwers: FollowersType[]
}

interface UserActivityList {
   title: string,
   subActivity: SubActivity[]
}
export const PROFILE_CONSTANTS: UserActivityList[] = [
  {
    title: 'Post',
    subActivity: [
      {
      name:'Articles',
      follwers: [{
        partisan: 20,
        biPartisan: 80
      }]
    },
    {
      name:'Comments',
      follwers: [{
        partisan: 30,
        biPartisan: 70
      }]
    },
  ]
  },
  {
    title: 'Topics',
    subActivity: [
      {
      name:'Crybtocurrency',
      follwers: [{
        partisan: 20,
        biPartisan: 80
      }]
    },
    {
      name:'Immigration',
      follwers: [{
        partisan: 30,
        biPartisan: 70
      }]
    }
  ]
  },
  {
    title: 'Partisan',
    subActivity: [
      {
      name:'Partisan',
      follwers: [{
        partisan: 20
      }]
    },
    {
      name:'Bi-Partisan',
      follwers: [{
        partisan: 30
      }]
    }
  ]
  }
]
