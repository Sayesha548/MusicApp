import React from 'react'

function Home() {
    return (
        <div>
            <form>
                <div className='center-aligner'>
                    <div className='form-container'>
                        {/* <label>username:</label> */}
                        <input type="text" placeholder='username'></input><br />
                        {/* <label>password:</label> */}
                        <input type="password" placeholder='password'></input><br />
                        <button>submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
