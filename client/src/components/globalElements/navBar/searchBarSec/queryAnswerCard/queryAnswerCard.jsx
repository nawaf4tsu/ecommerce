import './queryAnswerCard.css'

function QueryAnswerCard(props) {
  let searchData = props.searchData
  return (
    <>
      <a href={`/product/${searchData ? searchData.id : ''}`} className='searchCardLink'>
        <div className='searchCard'>
          <div className='SearchCardImage'>
            <img src={searchData.proImages[0]} alt="" />
          </div>
          <div className="SimpleName">
            <p>{searchData.proSimpleName}</p>
          </div>
          <div className="proPrice">
            <h4>₹{searchData.proPrice}&nbsp;<span>₹{searchData.proMrpPrice}</span></h4>
          </div>
        </div>
      </a>
    </>
  )
}

export default QueryAnswerCard