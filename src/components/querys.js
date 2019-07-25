import gql from "graphql-tag"

/**
 * @Component `BSubmit`
 */
//prettier-ignore
export const UPDATE_VOTES_MUTATION = gql`
  mutation UpdateQuestionItem (
    $questionId: ID!,
    $questionTotalVotes: Int!,
    $optionId: ID!,
    $optionVotes: Int!
    ) {
    updateQuestionItem(
      where: {
        id: $questionId
      }
      data:{
        totalVotes: $questionTotalVotes
        options:{
          update:[{
            where:{
              id: $optionId
            }
            data:{
              votes: $optionVotes
            }
          }]
        }
      }
    ){
      id
      totalVotes
      options {
        id
        votes
      }
    }
  }
`

/**
 * @Components `BAnswers` | `BSubmit`
 */
export const GET_ANSWERS = gql`
  {
    questionItems {
      totalVotes
      id
      title
      options {
        id
        votes
        blockWidth
        img {
          url
        }
      }
    }
  }
`
