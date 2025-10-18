const Home = () => {
    return (
        <div className="home">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAysFZcWYTHiuLdEaV2oNKcs5XU8PqUGbznQ&s" alt="Logo-image" />
            <div className = "search-bar">
                <div className="search-input">
                    <input type="text" placeholder="GoodReads Search" />
                    <i class="bi bi-caret-down-fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </i>
                </div>
                <button>SEARCH</button>
            </div>
        </div>
    );
}

export default Home;