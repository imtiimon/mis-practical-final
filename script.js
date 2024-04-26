function searchMeal() {
    const searchTerm = document.getElementById('search-input').value;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.error('Error fetching data:', error));
}

function displayMeals(meals) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    if (meals) {
        meals.slice(0, 5).forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal');
            mealElement.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strInstructions}</p>
            `;
            mealContainer.appendChild(mealElement);
        });

        if (meals.length > 5) {
            const showAllButton = document.createElement('button');
            showAllButton.classList.add('show-all');
            showAllButton.textContent = 'Show All';
            showAllButton.addEventListener('click', () => displayAllMeals(meals));
            mealContainer.appendChild(showAllButton);
        }
    } else {
        mealContainer.innerHTML = '<p>No meals found. Please try again.</p>';
    }
}

function displayAllMeals(meals) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    meals.forEach(meal => {
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p>${meal.strInstructions}</p>
        `;
        mealContainer.appendChild(mealElement);
    });
}
