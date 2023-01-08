import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { useEffect, useState } from "react";
import { getUsersComments } from "../../../service/api";

export default function Comments(){
    const navigate = useNavigate();
    const { user } = useAuth();
    const [comments, setComments] = useState()
    let i = 0;

    useEffect(()=>{
        getUsersComments(user.id)
            .then((res)=>{
                console.log(res.data);
                setComments(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    

    return(
        <div className="w-full">
        <div className="border-2 shadow-lg rounded-lg mt-10">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-10">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <AiOutlineArrowLeft
                  className="text-2xl"
                  onClick={() => {
                    navigate(-1);
                  }}
                />
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Place Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Comment
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comments?.map((comment) => {
                        return (
                          <tr class="border-b" key={comment.name}>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {++i}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {comment.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {comment.text}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}