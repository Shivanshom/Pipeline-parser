from fastapi import FastAPI, HTTPException  # type: ignore
from fastapi.middleware.cors import CORSMiddleware  # type: ignore
from pydantic import BaseModel  # type: ignore
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: str
    data: Dict[str, Any] = {}
    position: Dict[str, float] = {}


class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None  # type: ignore
    targetHandle: str = None  # type: ignore


class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline_data: PipelineData):
    """
    Parse pipeline data and return number of nodes, edges, and DAG status
    """
    try:
        nodes = pipeline_data.nodes
        edges = pipeline_data.edges

        num_nodes = len(nodes)
        num_edges = len(edges)

        is_dag = is_directed_acyclic_graph(nodes, edges)

        return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error parsing pipeline: {str(e)}")


def is_directed_acyclic_graph(nodes: List[Node], edges: List[Edge]) -> bool:

    if not nodes:
        return True

    graph = {node.id: [] for node in nodes}
    for edge in edges:
        if edge.source in graph:
            graph[edge.source].append(edge.target)

    color = {node.id: 0 for node in nodes}

    def dfs(node_id: str) -> bool:
        if color[node_id] == 1:
            return False
        if color[node_id] == 2:
            return True

        color[node_id] = 1

        for neighbor in graph[node_id]:
            if neighbor in color and not dfs(neighbor):
                return False

        color[node_id] = 2
        return True

    for node in nodes:
        if color[node.id] == 0:
            if not dfs(node.id):
                return False

    return True
