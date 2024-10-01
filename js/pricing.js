document.addEventListener('DOMContentLoaded', function () {
    const monthlyButton = document.getElementById('monthly');
    const yearlyButton = document.getElementById('yearly');
    
    const basicPrice = document.getElementById('basic_price');
    const premiumPrice = document.getElementById('premium_price');
    const ultimatePrice = document.getElementById('ultimate_price');
  
    const monthlyPrices = {
      basic: "$49",
      premium: "$79",
      ultimate: "$99"
    };
  
    const yearlyPrices = {
      basic: "$294",
      premium: "$474",
      ultimate: "$594"
    };
  
    function setPrices(prices) {
      basicPrice.textContent = prices.basic;
      premiumPrice.textContent = prices.premium;
      ultimatePrice.textContent = prices.ultimate;
    }
  
    setPrices(monthlyPrices);
  
    monthlyButton.addEventListener('click', function () {
      setPrices(monthlyPrices);
      monthlyButton.classList.add('active');
      yearlyButton.classList.remove('active');
    });
  
    yearlyButton.addEventListener('click', function () {
      setPrices(yearlyPrices);
      yearlyButton.classList.add('active');
      monthlyButton.classList.remove('active');
    });
  });
  