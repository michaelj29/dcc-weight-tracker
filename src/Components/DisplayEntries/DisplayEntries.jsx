const DisplayEntries = (props) => {
    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Entry #</th>
                <th>Weight</th>
                <th>Date</th>
            </tr>
              </thead>
              <tbody>
                  {props.userEntries.map((entry, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{entry.weight}</td>
                        <td>{entry.date}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
        </div>
      );
}
 
export default DisplayEntries;