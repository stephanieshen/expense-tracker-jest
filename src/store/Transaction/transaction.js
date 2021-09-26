import { createSlice } from "@reduxjs/toolkit"

const getTotalExpenses = (expenses) => {
	return expenses.reduce((total, expense) => {
		total += +expense.amount
		return total;
	}, 0);
}

const transactionsState = {
	isLoading: true,
  expenses: [],
	totalExpenses: 0
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState: transactionsState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
		setExpenses(state, action) {
			state.expenses = action.payload;
			state.totalExpenses = getTotalExpenses(state.expenses);
		},
		addExpense(state, action) {
			state.expenses.push(action.payload);
			state.totalExpenses = getTotalExpenses(state.expenses);
		}
	}
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
