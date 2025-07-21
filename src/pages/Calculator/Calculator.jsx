import React, { useState } from "react";

export default function GSTCalculator() {
  const [preTaxAmount, setPreTaxAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [results, setResults] = useState({
    preTax: 0,
    gstAmount: 0,
    totalAmount: 0,
  });

  const [errors, setErrors] = useState({
    preTaxAmount: "",
    gstRate: "",
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const validateInputs = () => {
    const newErrors = {
      preTaxAmount: "",
      gstRate: "",
    };

    if (!preTaxAmount.trim()) {
      newErrors.preTaxAmount = "Pre-tax amount is required";
    } else if (isNaN(Number(preTaxAmount)) || Number(preTaxAmount) < 0) {
      newErrors.preTaxAmount = "Please enter a valid positive number";
    }

    if (!gstRate.trim()) {
      newErrors.gstRate = "GST rate is required";
    } else if (isNaN(Number(gstRate)) || Number(gstRate) < 0 || Number(gstRate) > 100) {
      newErrors.gstRate = "Please enter a valid GST rate between 0 and 100";
    }

    setErrors(newErrors);
    return !newErrors.preTaxAmount && !newErrors.gstRate;
  };

  const calculateGST = () => {
    if (!validateInputs()) {
      setIsCalculated(false);
      return;
    }

    const preTax = parseFloat(preTaxAmount);
    const rate = parseFloat(gstRate);
    const gstAmount = (preTax * rate) / 100;
    const totalAmount = preTax + gstAmount;

    setResults({ preTax, gstAmount, totalAmount });
    setIsCalculated(true);
  };

  const handlePreTaxChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPreTaxAmount(value);
      if (errors.preTaxAmount) {
        setErrors((prev) => ({ ...prev, preTaxAmount: "" }));
      }
    }
  };

  const handleGSTRateChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setGstRate(value);
      if (errors.gstRate) {
        setErrors((prev) => ({ ...prev, gstRate: "" }));
      }
    }
  };

  const clearCalculator = () => {
    setPreTaxAmount("");
    setGstRate("");
    setResults({ preTax: 0, gstAmount: 0, totalAmount: 0 });
    setErrors({ preTaxAmount: "", gstRate: "" });
    setIsCalculated(false);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-[60vh] sm:min-h-screen p-4 flex items-center justify-center mt-25 ">
      <div className="w-full max-w-4xl space-y-8 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-3">GST Calculator</h1>
          <p className="text-lg text-black">
            Calculate Goods and Services Tax quickly and accurately
          </p>
        </div>

        <div className="bg-white rounded-2xl  border border-blue4 shadow-[0_0_200px_40px_rgba(0,180,216,0.5)] ">
          <div className="bg-gradient-to-l from-blue1 to-blue2 px-8 py-6 text-white rounded-2xl">
            <h2 className="text-2xl font-bold">Tax Calculator</h2>
            <p className="text-blue5">
              Enter the pre-tax amount and GST rate to calculate your total tax and final amount
            </p>
          </div>

          <div className="p-8 space-y-8 ">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="preTaxAmount" className="block text-sm font-semibold text-blue1">
                  Pre-Tax Amount
                </label>
                <input
                  id="preTaxAmount"
                  type="text"
                  placeholder="Enter amount (e.g., 100.00)"
                  value={preTaxAmount}
                  onChange={handlePreTaxChange}
                  className={`w-full px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue2 transition-all duration-200 ${
                    errors.preTaxAmount
                      ? "border-red-500 bg-red-50"
                      : "border-blue3 bg-white"
                  }`}
                />
                {errors.preTaxAmount && (
                  <p className="text-sm text-red-600">{errors.preTaxAmount}</p>
                )}
              </div>

              <div className="space-y-3">
                <label htmlFor="gstRate" className="block text-sm font-semibold text-blue1">
                  GST Rate (%)
                </label>
                <input
                  id="gstRate"
                  type="text"
                  placeholder="Enter rate (e.g., 18.00)"
                  value={gstRate}
                  onChange={handleGSTRateChange}
                  className={`w-full px-4 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue2 transition-all duration-200 ${
                    errors.gstRate ? "border-red-500 bg-red-50" : "border-blue3 bg-white"
                  }`}
                />
                {errors.gstRate && (
                  <p className="text-sm text-red-600">{errors.gstRate}</p>
                )}
              </div>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={calculateGST}
                className="flex-1 rounded-full px-8 py-4 bg-gradient-to-l text-xl from-blue1 to-blue2 text-white font-semibold  transition-all duration-200 transform hover:scale-105"
              >
                Calculate GST
              </button>
              <button
                onClick={clearCalculator}
                className="flex-1 text-xl  font-normal border-2 border-blue5  rounded-full px-8 py-4 hover:border-blue2 transition-all duration-200 transform hover:scale-105"
              >
                Clear All
              </button>
            </div>

            {isCalculated && (
              <div className="bg-gradient-to-r from-blue5 to-blue4 rounded-2xl border-2 border-blue3 p-6">
                <h3 className="text-xl font-bold mb-4">Calculation Results</h3>
                <div className="grid gap-6 md:grid-cols-3 mb-6">
                  <div className="bg-white p-6 rounded-xl border border-blue3 shadow-sm">
                    <div className="text-sm mb-2">Pre-Tax Amount</div>
                    <div className="text-3xl font-bold">{formatCurrency(results.preTax)}</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue2 shadow-sm">
                    <div className="text-sm  mb-2">GST Amount</div>
                    <div className="text-3xl font-bold text-blue2">
                      {formatCurrency(results.gstAmount)}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue1 shadow-sm">
                    <div className="text-sm  mb-2">Total Amount</div>
                    <div className="text-3xl font-bold text-blue1">
                      {formatCurrency(results.totalAmount)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue5 border border-blue4 rounded-xl p-6">
              <h4 className="font-semibold text-blue1 mb-2">How to use:</h4>
              <p className="text-blue2">
                Enter your pre-tax amount and the applicable GST rate percentage. The calculator
                will show you the GST amount and total amount including tax. Common GST rates
                include 5%, 12%, 18%, and 28% depending on your product and state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
