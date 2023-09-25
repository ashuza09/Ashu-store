import dayjs from "dayjs";
import { useLoaderData } from "react-router-dom";
import advancedFormat  from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const OrdersList = () => {
    const {orders,meta} = useLoaderData()

  return <div className="mt-8">
    <h4 className="mb-4 capitalize">Total orders: {meta.pagination.total}</h4>
    <div className="table table-zebra">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Coast</th>
                <th className="hidden sm:block">Date</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order)=>{
                console.log(orders.id)
                const id = order.id
                const {name, address, numItemsInCart, orderTotal, createdAt  } = order.attributes
                const date = dayjs(createdAt).format('hh:mm a -MMM Do, YYYY')
                return <tr key={id}>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{numItemsInCart}</td>
                    <td>{orderTotal}</td>
                    <td className="hidden sm:block">{date}</td>
                </tr>
            })}
        </tbody>
    </div>
  </div>
};
export default OrdersList;
