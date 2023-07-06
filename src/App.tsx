import {decrement, increment, incrementByAmount} from "./redux/features/counter/counterSlice.ts";
import {useAppDispatch, useAppSelector} from "./redux/hook.ts";

function App() {
    const {count} = useAppSelector((state) => state.count)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div className="flex justify-center m-8">
                <div className="flex justify-between w-96">
                    <button
                        className="border-2 border-green-600 bg-green-500 text-white rounded-md px-2 py-3"
                        onClick={() => dispatch(increment())}
                    >Increment
                    </button>
                    <button
                        className="border-2 border-green-600 bg-green-500 text-white rounded-md px-2 py-3"
                        onClick={() => dispatch(incrementByAmount(5))}
                    >Increment By Value
                    </button>
                    <div className="flex items-center text-4xl font-bold">{count}</div>
                    <button className="border-2 border-red-600 bg-red-500 text-white rounded-md px-2 py-3"
                            onClick={() => dispatch(decrement())}
                    >Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
