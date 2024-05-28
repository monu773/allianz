import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  HStack,
  VStack,
  Tag,
  TagLabel
} from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialIndicators = [
  "Bollinger Bands (BBANDS upperband)",
  "Bollinger Bands (BBANDS middleband)",
  "Bollinger Bands (BBANDS lowerband)",
  "Exponential Moving Average (EMA)",
  "Parabolic SAR (SAR)",
  "Simple Moving Average (SMA)"
];
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "../Dashboard/components/PortfolioSection";
import PriceSection from "../Dashboard/components/PriceSection";
import Transactions from "../Dashboard/components/Transactions";
import InfoCard from "../Dashboard/components/InfoCard";

const TransactionPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [equity, setEquity] = useState("Nifty 50");
  const [x, setX] = useState("");
  const [startTime, setStartTime] = useState("09:30");
  const [endTime, setEndTime] = useState("15:00");
  const [satisfy, setSatisfy] = useState("Satisfy");
  const [duplicateResults, setDuplicateResults] = useState(false);
  const [indicators, setIndicators] = useState(initialIndicators);
  const [selectedIndicators, setSelectedIndicators] = useState([]);

  const handleDragEnd = result => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (
      source.droppableId === "indicators" &&
      destination.droppableId === "selectedIndicators"
    ) {
      const newSelectedIndicators = Array.from(selectedIndicators);
      newSelectedIndicators.splice(
        destination.index,
        0,
        indicators[source.index]
      );
      setSelectedIndicators(newSelectedIndicators);
    }
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log({
      name,
      description,
      equity,
      x,
      startTime,
      endTime,
      satisfy,
      duplicateResults,
      selectedIndicators
    });
  };

  return (
    <DashboardLayout title="Scanners">
      <ChakraProvider>
        <Box p={4}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={e => setName(e.target.value)} />
          </FormControl>

          <FormControl id="description" mb={4}>
            <FormLabel>Description</FormLabel>
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </FormControl>

          <DragDropContext onDragEnd={handleDragEnd}>
            <HStack align="start" spacing={4}>
              <VStack align="start" w="40%">
                <FormLabel>Search</FormLabel>
                <Droppable droppableId="indicators">
                  {provided =>
                    <VStack
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="md"
                      p={2}
                      w="100%"
                    >
                      {indicators.map((indicator, index) =>
                        <Draggable
                          key={indicator}
                          draggableId={indicator}
                          index={index}
                        >
                          {provided =>
                            <Tag
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              mb={2}
                              size="lg"
                              variant="outline"
                              colorScheme="teal"
                            >
                              <TagLabel>
                                {indicator}
                              </TagLabel>
                            </Tag>}
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </VStack>}
                </Droppable>
              </VStack>

              <VStack align="start" w="60%">
                <FormLabel>Drag something here!</FormLabel>
                <Droppable droppableId="selectedIndicators">
                  {provided =>
                    <VStack
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      border="2px dashed"
                      borderColor="gray.300"
                      borderRadius="md"
                      p={4}
                      w="100%"
                      minHeight="200px"
                      align="stretch"
                    >
                      {selectedIndicators.map((indicator, index) =>
                        <Box
                          key={index}
                          p={2}
                          border="1px solid"
                          borderRadius="md"
                          mb={2}
                        >
                          {indicator}
                        </Box>
                      )}
                      {provided.placeholder}
                    </VStack>}
                </Droppable>
              </VStack>
            </HStack>
          </DragDropContext>

          <FormControl id="filter" mb={4}>
            <FormLabel>Filter</FormLabel>
            <VStack align="start">
              <Select value={equity} onChange={e => setEquity(e.target.value)}>
                <option value="Nifty 50">Nifty 50</option>
                {/* Add more options as needed */}
              </Select>
              <Input
                value={x}
                onChange={e => setX(e.target.value)}
                placeholder="X"
              />
              <HStack>
                <Input
                  type="time"
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                />
                <Input
                  type="time"
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                />
              </HStack>
              <RadioGroup
                value={satisfy}
                onChange={value => setSatisfy(value)}
                name="satisfy"
              >
                <HStack>
                  <Radio value="Satisfy">Satisfy</Radio>
                  <Radio value="Not Satisfy">Not Satisfy</Radio>
                </HStack>
              </RadioGroup>
              <Checkbox
                isChecked={duplicateResults}
                onChange={e => setDuplicateResults(e.target.checked)}
              >
                Duplicate results
              </Checkbox>
            </VStack>
          </FormControl>

          <Button onClick={handleSubmit} colorScheme="teal" mt={4}>
            Submit
          </Button>
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            mt={4}
            marginLeft={"20px"}
          >
            Save
          </Button>
        </Box>
      </ChakraProvider>
    </DashboardLayout>
  );
};

export default TransactionPage;
