// Table.tsx
// Table component storing game data

// will need a lot more logic to connect the backend data
// and to filter, set up sorting, etc.

// main Table function...
// styling based off of the legend component...
export default function Table() {
    return (
        <div className="mt-12 font-mono mx-auto max-w-4xl border-4 border-green-800 bg-white p-6">
            <h2 className="text-center mb-6 border-b-4 border-green-800 pb-4 text-2xl font-bold text-green-800 uppercase">
                Lottery Data
            </h2>
            <div>
                {/* table headers... */}
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-green-800 text-white">
                        <th className="p-3 border-2 border-green-900">Game</th>
                        <th className="p-3 border-2 border-green-900">Price</th>
                        <th className="p-3 border-2 border-green-900">Odds</th>
                        <th className="p-3 border-2 border-green-900">Starting EV</th>
                        <th className="p-3 border-2 border-green-900">Current EV</th>
                        <th className="p-3 border-2 border-green-900">EV per $</th>
                        <th className="p-3 border-2 border-green-900">Current Net</th>
                        <th className="p-3 border-2 border-green-900">Link</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/* we will need to load in the data - put dummy rows for now */}
                    <tr className="bg-green-50 border-2 border-green-900">
                        <td className="p-3 border-2 border-green-900">200X</td>
                        <td className="p-3 border-2 border-green-900">$30</td>
                        <td className="p-3 border-2 border-green-900">1:1.00</td>
                        <td className="p-3 border-2 border-green-900">$0.53</td>
                        <td className="p-3 border-2 border-green-900">$0.32</td>
                        <td className="p-3 border-2 border-green-900">$0.07</td>
                        <td className="p-3 border-2 border-green-900">-$0.28</td>
                        <td className="p-3 border-2 border-green-900">
                            <a href="">Link</a>
                        </td>
                    </tr>

                    {/* another dummy row to test color alteration between rows (if too complex we can scrap it) */}
                    <tr className="bg-green-100 border-2 border-green-900">
                        <td className="p-3 border-2 border-green-900">200X</td>
                        <td className="p-3 border-2 border-green-900">$30</td>
                        <td className="p-3 border-2 border-green-900">1:1.00</td>
                        <td className="p-3 border-2 border-green-900">$0.53</td>
                        <td className="p-3 border-2 border-green-900">$0.32</td>
                        <td className="p-3 border-2 border-green-900">$0.07</td>
                        <td className="p-3 border-2 border-green-900">-$0.28</td>
                        <td className="p-3 border-2 border-green-900">
                            <a href="">Link</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}