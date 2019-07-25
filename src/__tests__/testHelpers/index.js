import React from "react"
import Fade from "react-reveal/Fade"
import BCard from "components/bizzUI/BCard"
import BCardTitle from "components/bizzUI/BCardTitle"
import BOptions from "components/bizzUI/BOptions"
import BOptionItem from "components/bizzUI/BOptionItem"

import { setCheckedKeyToOptions } from "contexts/bizzActions"

export const hasOnlyOneCheckedOption = question => {
  const votedOption = question.options.filter(option => {
    option.checked === true
  })
  return !(votedOption.length > 1)
}

const questions = [
  {
    totalVotes: 1,
    id: "cjy4cg6argusr0910wfkmbop2",
    title: "Which one would you click to search?",
    options: [
      {
        id: "cjy4cjm77go8109411e7sztej",
        title: null,
        votes: 0,
        subtitle: null,
        blockWidth: null,
        img: {
          url: "https://media.graphcms.com/4aoocbgXRJeZ6zYWFyUG",
        },
      },
      {
        id: "cjy4cm0e2gono09411ohuqt6k",
        title: null,
        votes: 1,
        subtitle: null,
        blockWidth: null,
        img: {
          url: "https://media.graphcms.com/YlgILmLURIKf8qt6bdhB",
        },
      },
    ],
  },
  {
    totalVotes: 1,
    id: "cjy4s20okje0z09105auxzr2t",
    title: "Which use of fonts do you prefer?",
    options: [
      {
        id: "cjy4s0td5lqeg0d53p9tfo2d4",
        title: "Serif",
        votes: 1,
        subtitle: "Sans Serif",
        blockWidth: true,
        img: {
          url: "https://media.graphcms.com/KkLS0DoeSaWOapebzyvA",
        },
      },
      {
        id: "cjy4s1ymzje0i0910209tukwg",
        title: "Sans Serif",
        votes: 0,
        subtitle: "Serif",
        blockWidth: true,
        img: {
          url: "https://media.graphcms.com/UAYowCx8TuugvZG70CYg",
        },
      },
    ],
  },
  {
    totalVotes: 1,
    id: "cjy8x8at4ibyc0d53zoq62g82",
    title: "Which form action pleases you most?",
    options: [
      {
        id: "cjy8x6nemb16z0941i1e45v4u",
        title: null,
        votes: 1,
        subtitle: null,
        blockWidth: true,
        img: {
          url: "https://media.graphcms.com/u5jqYYnETUa3RnZIgOqr",
        },
      },
      {
        id: "cjy8x7emob7mo0910jmte3068",
        title: null,
        votes: 0,
        subtitle: null,
        blockWidth: true,
        img: {
          url: "https://media.graphcms.com/cEp5FF43QOyX2DN0doKt",
        },
      },
      {
        id: "cjy8x805lb1fr0941eli02pmm",
        title: null,
        votes: 0,
        subtitle: null,
        blockWidth: true,
        img: {
          url: "https://media.graphcms.com/rlTcvVp1RFygJ0Rnes7m",
        },
      },
    ],
  },
]

export const ids = {
  firstQuestion: {
    id: questions[0].id,
    options: {
      firstId: questions[0].options[0].id,
      secondId: questions[0].options[1].id,
    },
  },
  secondQuestion: {
    id: questions[1].id,
    options: {
      firstId: questions[1].options[0].id,
      secondId: questions[1].options[1].id,
    },
  },
}

export const questionItems = setCheckedKeyToOptions(questions, {})
